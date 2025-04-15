export const PaymentCodeGenerator = (length = 9) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let pass = "";

    for (let index = 0; index < length; index++) {
        const randomIndex = Math.floor(Math.random() * chars.length) 
        pass += chars[randomIndex]
    }
    return pass;
}