const passport=require('passport'),
      Auth0Strategy=require('passport-auth0'),
      { auth0 }=require('./config.json'),
      strategy=new Auth0Strategy({
          domain: auth0.domain,
          clientID: auth0.clientID,
          clientSecret: auth0.clientSecret,
          callbackURL: 'http://localhost:3001/api/auth/callback',
      }, (accessToken, refreshToken, extraParams, profile, done)=>done(null, profile))

module.exports=function(app){
    passport.use(strategy)
    passport.serializeUser((user, done)=>{
        done(null, user)
    })
    passport.deserializeUser((user, done)=>{
        done(null, user)
    })

    app.use(passport.initialize())
    app.use(passport.session())

    app.get('/api/auth/login', passport.authenticate('auth0', {
        clientID: auth0.clientID,
        domain: auth0.domain,
        redirectUri: 'http://localhost:3001/api/auth/callback',
        audience: `https://${auth0.domain}/userinfo`,
        responseType: 'code',
        scope: 'openid'
    }), (req, res)=>{res.redirect('/#/quotes')})

    app.get('/api/auth/logout', (req, res)=>{
        req.logout()
        res.redirect('/#')
    })

    app.get('/api/auth/callback', passport.authenticate('auth0', {
        failureRedirect: '/#'
    }), (req, res)=>{res.redirect('/#/quotes')})
}