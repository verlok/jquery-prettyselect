require('browser-env')(['window', 'document', 'navigator']);

document.body.innerHTML = `
    <select id="basic">
        <option value="1 a">a</option>
        <option value="2 b" data-placeholder>b</option>
        <option value="3 c">c</option>
    </select>
    <select name="" id="secondary">
        <option value="1">e</option>
        <option value="2">d</option>
        <option value="3">f</option>
        <option value="4">g</option>
        <option value="5">y</option>
    </select>
        <select name="" id="third">
        <option>e</option>
        <option value="2">d</option>
        <option value="3">f</option>
        <option value="4">g</option>
        <option value="5'4">y</option>
    </select>
    <select  name="" id="nasty">
        <option value="{&quot;id&quot;: &quot;13&quot;, &quot;text&quot;:&quot;十堰市&quot;}">十堰市</option>
        <option value="{&quot;id&quot;: &quot;14&quot;, &quot;text&quot;:&quot;咸宁市&quot;}">咸宁市</option>
        <option value="{&quot;id&quot;: &quot;15&quot;, &quot;text&quot;:&quot;孝感市&quot;}">孝感市</option>
        <option value="{&quot;id&quot;: &quot;16&quot;, &quot;text&quot;:&quot;宜昌市&quot;}">宜昌市</option>
        <option value="{&quot;id&quot;: &quot;17&quot;, &quot;text&quot;:&quot;恩施土家族苗族自治州&quot;}">恩施土家族苗族自治州</option>
        <option value="{&quot;id&quot;: &quot;18&quot;, &quot;text&quot;:&quot;武汉市&quot;}">武汉市</option>
        <option value="{&quot;id&quot;: &quot;19&quot;, &quot;text&quot;:&quot;省直辖行政单位&quot;}">省直辖行政单位</option>
        <option value="{&quot;id&quot;: &quot;20&quot;, &quot;text&quot;:&quot;荆州市&quot;}">荆州市</option>
        <option value="{&quot;id&quot;: &quot;21&quot;, &quot;text&quot;:&quot;荆门市&quot;}">荆门市</option>
        <option value="{&quot;id&quot;: &quot;22&quot;, &quot;text&quot;:&quot;襄樊市&quot;}">襄樊市</option>
        <option value="{&quot;id&quot;: &quot;23&quot;, &quot;text&quot;:&quot;鄂州市&quot;}">鄂州市</option>
        <option value="{&quot;id&quot;: &quot;24&quot;, &quot;text&quot;:&quot;随州市&quot;}">随州市</option>
        <option value="{&quot;id&quot;: &quot;25&quot;, &quot;text&quot;:&quot;黄冈市&quot;}">黄冈市</option>
        <option value="{&quot;id&quot;: &quot;26&quot;, &quot;text&quot;:&quot;黄石市&quot;}">黄石市</option>
    </select>
    `;