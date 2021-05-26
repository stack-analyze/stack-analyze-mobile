module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/tech-stack',
        '/pagespeed',
        '/whois',
        '/about',
        '/github',
        '/anime',
        '/hardware'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
