exports.up = knex => {
    return knex.schema.createTableIfNotExists('games', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('url_logo').notNullable()
    })
}

exports.down = knex => {
    return knex.schema.dropTable('games')
}