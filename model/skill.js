const skills = [
  {skill: 'HTML'},
  {skill: 'CSS'},
  {skill: 'JavaScript'}, 
  {skill:'Node.js'},
  {skill: 'python'},
  {skill: 'Git'},
  {skill:'React'}
];
  
  module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
    edit
  };

  function deleteOne(id) {
    skills.splice(id, 1);
  }

  function create(skill) {
    skills.push(skill);
  }
  
function getOne(id) {
    return skills[id];
}

  function getAll() {
    return skills;
  }

  function edit(id, input){
    skills.splice(id, 1, input);
  }