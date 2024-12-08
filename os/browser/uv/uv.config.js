self.__uv$config = {
    prefix: '/os/browser/search/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/os/browser/uv/uv.handler.js',
    bundle: '/os/browser/uv/uv.bundle.js',
    config: '/os/browser/uv/uv.config.js',
    sw: '/os/browser/uv/uv.sw.js',
};
