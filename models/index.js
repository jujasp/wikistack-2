var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});


const Page = db.define('page', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	urlTitle: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	status: {
		type: Sequelize.ENUM('open', 'closed')
	},
	 route: {
        type: Sequelize.VIRTUAL,
        get () {
            return '/wiki/' + this.getDataValue('urlTitle')
        }
    }
})

Page.beforeValidate(function (page) {
  if (page.title) {
    page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
  }
})


const User = db.define('users', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

Page.belongsTo(User, { as: 'author' });


module.exports = {
	Page: Page,
	User: User,
	db: db
}

