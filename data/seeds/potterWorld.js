
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('potterWorld')
    .truncate()
    .then(function() {
      return knex('potterWorld').insert([
        { name: 'harry' },
        { name: 'dumbuldorf' },
        { name: 'snip' },
        { name: 'valamore' },
      ]);
    });
};