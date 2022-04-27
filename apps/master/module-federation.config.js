module.exports = {
  name: 'master',
  // remotes: ['task-management', 'on-boarding'],
  remotes: [],
  shared: (libraryName) => {
    if(libraryName === '@nrwl/angular/mfe') {
      return false;
    }
  }
};
