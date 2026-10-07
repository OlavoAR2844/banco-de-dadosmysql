db.employees.insertMany([
  {_id: 1, name: 'Clark', dept: 'Sales' },
  {_id: 2, name: 'Dave', dept: 'Accounting' },
  {_id: 3, name: 'Ava', dept: 'Sales' }
]);

db.employees.find({dept: 'Sales'});
