export default function Select({ mode }) {
    switch (mode) {
        case "distance":
            return (
                <>
                    <option value="cm">센티미터 (cm)</option>
                    <option value="m">미터 (m)</option>
                    <option value="km">킬로미터 (km)</option>
                </>
            )
        case "mass":
            return (
                <>
                    <option value="g">그램 (g)</option>
                    <option value="kg">킬로그램 (kg)</option>
                    <option value="t">톤 (t)</option>
                </>
            )
        case "temp":
            return (
                <>
                    <option value="c">섭씨 (°C)</option>
                    <option value="f">화씨 (°F)</option>
                    <option value="k">켈빈 (K)</option>
                </>
            )
        case "time":
            return (
                <>
                    <option value="s">초 (s)</option>
                    <option value="m">분 (m)</option>
                    <option value="h">시 (h)</option>
                </>
            )
        case "money":
            return (
                <>
                    <option value="won">원 (₩)</option>
                    <option value="dollor">달러 ($)</option>
                    <option value="euro">유로 (€)</option>
                </>
            )      
        case "speed":
            return (
                <>
                    <option value="m">m/s</option>
                    <option value="km">km/h</option>
                </>
            )  
    }
}