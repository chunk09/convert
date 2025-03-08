class Convert {
    constructor(opt1, opt2, value) {
        this.opt1 = opt1;
        this.opt2 = opt2;

        this.value = Number(value);
    }

    distance() {
        switch (this.opt1) {
            case "cm": switch (this.opt2) {
                    case "cm": return this.value;
                    case "m": return this.value / 100;
                    case "km": return this.value / 100000;
                }
                break;
            case "m" : switch (this.opt2) {
                    case "cm": return this.value * 100;
                    case "m": return this.value;
                    case "km": return this.value / 1000;
                }
                break;
            case "km": switch (this.opt2) {
                    case "cm": return this.value * 100000;
                    case "m": return this.value * 1000;
                    case "km": return this.value;
                }
                break;
        }
    }

    mass() {
        switch (this.opt1) {
            case "g": switch (this.opt2) {
                    case "g": return this.value;
                    case "kg": return this.value / 1000;
                    case "t": return this.value / 1000000;
                }
                break;
            case "kg" : switch (this.opt2) {
                    case "g": return this.value * 1000;
                    case "kg": return this.value;
                    case "t": return this.value / 1000;
                }
                break;
            case "t": switch (this.opt2) {
                    case "g": return this.value * 1000000;
                    case "kg": return this.value * 1000;
                    case "t": return this.value;
                }
                break;
        }
    }

    temp() {
        switch (this.opt1) {
            case "c": switch (this.opt2) {
                    case "c": return this.value;
                    case "f": return (this.value * (9/5)) + 32;
                    case "k": return this.value + 273.15;
                }
                break;
            case "f" : switch (this.opt2) {
                    case "c": return (this.value - 32) * (5/9);
                    case "f": return this.value;
                    case "k": return (this.value - 32) * (5/9) + 273;
                }
                break;
            case "k": switch (this.opt2) {
                    case "c": return this.value - 273.15;
                    case "f": return (this.value - 273.15) * (9/5) + 32;
                    case "k": return this.value;
                }
                break;
        }
    }

    time() {
        switch (this.opt1) {
            case "s": switch (this.opt2) {
                    case "s": return this.value;
                    case "m": return this.value / 60;
                    case "h": return this.value / 3600;
                }
                break;
            case "m" : switch (this.opt2) {
                    case "s": return this.value * 60;
                    case "m": return this.value;
                    case "h": return this.value / 60;
                }
                break;
            case "h": switch (this.opt2) {
                    case "s": return this.value * 3600;
                    case "m": return this.value * 60;
                    case "h": return this.value;
                }
                break;
        }
    }

    money(dollor, euro) {
        switch (this.opt1) {
            case "won": switch (this.opt2) {
                    case "won": return (this.value).toFixed(5);
                    case "dollor": return (this.value / dollor).toFixed(5);
                    case "euro": return (this.value / euro).toFixed(5);
                }
                break;
            case "dollor": switch (this.opt2) {
                    case "won": return (this.value * dollor).toFixed(5);
                    case "dollor": return this.value.toFixed(5);
                    case "euro": return ((this.value * dollor) / euro).toFixed(5);
                }
                break;
            case "euro": switch (this.opt2) {
                    case "won": return (this.value * euro).toFixed(5);
                    case "dollor": return ((this.value * euro) / dollor).toFixed(5);
                    case "euro": return this.value.toFixed(5);
                }
                break;
        }
    }

    speed() {
        switch (this.opt1) {
            case "m": switch (this.opt2) {
                    case "m": return this.value;
                    case "km": return this.value * 3.6;
                }
                break;
            case "km" : switch (this.opt2) {
                    case "m": return this.value / 3.6;
                    case "km": return this.value;
                }
                break;
        }
    }

}

export default Convert;