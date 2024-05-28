async function globalTeardown() {
    await globalThis.__BROWSER__.close();
}

export default globalTeardown;
