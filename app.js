let heroData = [
  {name: 'Iron Man',       phone_number: '111-111-1111', comic: 'Marvel', img_url: 'https://s-media-cache-ak0.pinimg.com/736x/2c/bb/04/2cbb04e7ef9266e1e57a9b0e75bc555f.jpg'},
  {name: 'Hulk',           phone_number: '222-222-2222', comic: 'Marvel', img_url: 'http://vignette1.wikia.nocookie.net/marvel-cinematic-universe/images/5/53/Hulk.AoU.PNG/revision/latest?cb=20150314075133'},
  {name: 'Doctor Strange', phone_number: '333-333-3333', comic: 'Marvel', img_url: 'http://vignette3.wikia.nocookie.net/marvelcinematicuniverse/images/8/8a/Dr_Strange_Fuller_Textless_Poster.jpg/revision/latest/scale-to-width-down/335?cb=20160512000840'},
  {name: 'Thor',           phone_number: '444-444-4444', comic: 'Marvel', img_url: 'https://s-media-cache-ak0.pinimg.com/originals/70/2b/54/702b5448328de306a0dc19161a455c25.jpg'},
  {name: 'Cyborg',         phone_number: '555-555-5555', comic: 'DC',   img_url: 'https://static.comicvine.com/uploads/scale_medium/11/113509/5389882-2161245509-Justi.jpg'},
  {name: 'Superman',       phone_number: '666-666-6666', comic: 'DC',   img_url: 'https://cdn.theatlantic.com/assets/media/img/mt/2016/01/superman/lead_960.jpg?1454104448'},
  {name: 'Batman',         phone_number: '777-777-7777', comic: 'DC',   img_url: 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg'},
  {name: 'Flash',          phone_number: '888-888-8888', comic: 'DC',   img_url: 'http://www.dccomics.com/sites/default/files/TV_Gallery_Flash01_53712e35b9f542.99255638.jpg'}
]


angular
  .module('heroApp', [])
  .controller('HeroController', [
    HeroControllerFunction
  ])

  function HeroControllerFunction() {
    this.heroes = heroData
    this.newHeroName = ''
    this.newHeroNumber = ''
    this.newComic = ''
    this.newImg = ''
    this.addHero = function() {
      let hero = {name: this.newHeroName, phone_number: this.newHeroNumber, comic: this.newComic, img_url: this.newImg}
      this.heroes.push(hero)
      this.newHero = ''
    }
  }
