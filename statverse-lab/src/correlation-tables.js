/** Selected factual table entries: Pearson IAL Formula Book Issue 2 (2021), printed p27/PDF p33.
 * Each row: n, PMCC one-tail .05/.025, Spearman one-tail .05/.025.
 * .025 one-tail is used for a two-sided total alpha .05. null means no printed critical entry.
 */
export const CORRELATION_TABLE_SOURCE='https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf#page=33';
const rows=[
[4,.9000,.9500,1,null],[5,.8054,.8783,.9000,1],[6,.7293,.8114,.8286,.8857],
[7,.6694,.7545,.7143,.7857],[8,.6215,.7067,.6429,.7381],[9,.5822,.6664,.6000,.7000],
[10,.5494,.6319,.5636,.6485],[11,.5214,.6021,.5364,.6182],[12,.4973,.5760,.5035,.5874],
[13,.4762,.5529,.4835,.5604],[14,.4575,.5324,.4637,.5385],[15,.4409,.5140,.4464,.5214],
[16,.4259,.4973,.4294,.5029],[17,.4124,.4821,.4142,.4877],[18,.4000,.4683,.4014,.4716],
[19,.3887,.4555,.3912,.4596],[20,.3783,.4438,.3805,.4466],[21,.3687,.4329,.3701,.4364],
[22,.3598,.4227,.3608,.4252],[23,.3515,.4133,.3528,.4160],[24,.3438,.4044,.3443,.4070]];
export function correlationCritical(method,n,alternative='two-sided'){if(!['pearson','spearman'].includes(method)||!['less','greater','two-sided'].includes(alternative))throw new RangeError('Unknown table method/alternative');const row=rows.find(r=>r[0]===n);if(!row)return null;const column=method==='pearson'?1:3;const critical=row[column+(alternative==='two-sided'?1:0)];return critical===null?null:{critical,oneTailLevel:alternative==='two-sided'?.025:.05,totalAlpha:.05,n,method,alternative,source:CORRELATION_TABLE_SOURCE}}
