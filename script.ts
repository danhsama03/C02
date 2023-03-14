function roll(): void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let min: number = Number(input.value);

    let input2: HTMLInputElement = <HTMLInputElement>document.getElementById("max");
    let max: number = Number(input2.value);

    if (max <= min) {
        console.log("Hay nhap so khac");
    } else {
        let ramDomNumBer: number = Math.floor(Math.random() * (max - min + 1)) + min;
    
        let resuilt = ramDomNumBer;
    
        let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
        p.innerHTML = String(resuilt);
    }
    
}