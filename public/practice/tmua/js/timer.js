// timer.js - 计时器功能（倒计时、暂停、模考时间管理）

/**
 * 格式化时间（秒转换为 MM:SS）
 * @param {number} totalSeconds - 总秒数
 * @returns {string} 格式化的时间字符串
 */
function formatTime(totalSeconds) {
    const safeSeconds = Math.max(0, totalSeconds);
    const minutes = Math.floor(safeSeconds / 60);
    const seconds = safeSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * MockTimer 类 - 模拟考试计时器管理
 */
class MockTimer {
    constructor(durationSeconds = 75 * 60) {
        this.durationSeconds = durationSeconds;
        this.remainingSeconds = durationSeconds;
        this.timerId = null;
        this.onTick = null;
        this.onExpire = null;
        this.isRunning = false;
    }

    /**
     * 开始计时
     * @param {Function} onTick - 每秒回调
     * @param {Function} onExpire - 时间耗尽回调
     */
    start(onTick, onExpire) {
        this.onTick = onTick;
        this.onExpire = onExpire;
        this.isRunning = true;
        
        this.timerId = setInterval(() => {
            this.remainingSeconds--;
            if (this.onTick) {
                this.onTick(this.remainingSeconds);
            }
            if (this.remainingSeconds <= 0) {
                this.stop();
                if (this.onExpire) {
                    this.onExpire();
                }
            }
        }, 1000);
    }

    /**
     * 停止计时
     */
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        this.isRunning = false;
    }

    /**
     * 暂停计时
     */
    pause() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        this.isRunning = false;
    }

    /**
     * 继续计时
     */
    resume() {
        if (!this.isRunning && this.remainingSeconds > 0) {
            this.start(this.onTick, this.onExpire);
        }
    }

    /**
     * 重置计时器
     */
    reset() {
        this.stop();
        this.remainingSeconds = this.durationSeconds;
    }

    /**
     * 获取已用时间
     * @returns {number} 已用秒数
     */
    getUsedSeconds() {
        return this.durationSeconds - this.remainingSeconds;
    }

    /**
     * 检查是否需要警告（剩余时间少于指定阈值）
     * @param {number} thresholdSeconds - 警告阈值（秒）
     * @returns {boolean} 是否需要警告
     */
    needsWarning(thresholdSeconds = 600) {
        return this.remainingSeconds <= thresholdSeconds;
    }

    /**
     * 格式化剩余时间
     * @returns {string} 格式化的时间
     */
    formatRemaining() {
        return formatTime(this.remainingSeconds);
    }

    /**
     * 格式化已用时间
     * @returns {string} 格式化的时间
     */
    formatUsed() {
        return formatTime(this.getUsedSeconds());
    }
}

/**
 * 计算平均每题用时
 * @param {number} usedSeconds - 总已用秒数
 * @param {number} answeredCount - 已答题数
 * @returns {number} 平均秒数
 */
function calculateAvgTime(usedSeconds, answeredCount) {
    return answeredCount > 0 ? Math.round(usedSeconds / answeredCount) : 0;
}