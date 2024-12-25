export const uuid = (usecrypto = true) => {
  if (usecrypto && globalThis.crypto) {
    return crypto.randomUUID();
  }
  // b9d3 b3b4 -7547-402a-ad57-0337 e0e6 ff36
  const r = () => {
    const s = "000" + Math.floor(Math.random() * 0x10000).toString(16);
    return s.substring(s.length - 4);
  };
  return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r();
};
