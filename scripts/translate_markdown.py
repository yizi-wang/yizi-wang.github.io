import os
import re
import sys
import glob
from deep_translator import GoogleTranslator

def translate_markdown_file(filepath):
    print(f"Translating {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Protect Frontmatter
    frontmatter = ""
    if content.startswith("---\n"):
        parts = content.split("---\n", 2)
        if len(parts) >= 3:
            frontmatter = "---\n" + parts[1] + "---\n"
            content = parts[2]

    # 2. Protect Code Blocks, Math Blocks, and Inline Math
    placeholders = []
    
    def replacer(match):
        placeholders.append(match.group(0))
        return f" [[PROTECT_{len(placeholders)-1}]] "

    # Code blocks
    content = re.sub(r'```.*?```', replacer, content, flags=re.DOTALL)
    # Block Math
    content = re.sub(r'\$\$.*?\$\$', replacer, content, flags=re.DOTALL)
    # Inline Math
    content = re.sub(r'(?<!\$)\$(?!\$).*?(?<!\$)\$(?!\$)', replacer, content)

    # 3. Translate by paragraphs to respect the 5000 char limit
    paragraphs = content.split('\n\n')
    translated_paragraphs = []
    translator = GoogleTranslator(source='zh-CN', target='en')
    import time

    for p in paragraphs:
        if not p.strip():
            translated_paragraphs.append(p)
            continue
        
        # Only translate if there are Chinese characters
        if re.search(r'[\u4e00-\u9fff]', p):
            try:
                translated_p = translator.translate(p)
                translated_paragraphs.append(translated_p)
                time.sleep(0.1) # Small delay to avoid rate limits
            except Exception as e:
                print(f"Error translating paragraph: {e}")
                translated_paragraphs.append(p)
        else:
            translated_paragraphs.append(p)

    translated_content = '\n\n'.join(translated_paragraphs)

    # 4. Restore Placeholders
    for i, original_text in enumerate(placeholders):
        # The translator might add spaces or change casing slightly for our placeholders
        # We replace any variation like [[PROTECT_0]], [ [ PROTECT_0 ] ] etc.
        pattern = r'\[\s*\[\s*PROTECT_' + str(i) + r'\s*\]\s*\]'
        translated_content = re.sub(pattern, lambda m: original_text, translated_content, flags=re.IGNORECASE)

    # Re-assemble
    final_result = frontmatter + translated_content

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(final_result)
    print(f"Finished {filepath}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python translate_markdown.py <file_or_pattern>")
        sys.exit(1)
        
    pattern = sys.argv[1]
    files = glob.glob(pattern, recursive=True)
    for file in files:
        if os.path.isfile(file) and file.endswith('.md'):
            translate_markdown_file(file)
