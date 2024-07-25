console.log("Hello, World!");

if (process.env.CUSTOM_MESSAGE) {
    console.log(process.env.CUSTOM_MESSAGE);
} else {
    console.log("no custom message!");
}