(function () {
  function Git(name) {
    this.name = name; // repo name
    this.lastCommitId = -1; // Keep track of last commit id.
    this.branches = []; // List of all branches.

    let master = new Branch("master", null);
    this.branches.push(master); // Stores master branch.

    this.HEAD = master; // Head points to current branch.
  }

  // let repo = new Git("my-repo");
  // Acutal command -> $git init

  function Commit(id, parent, message) {
    this.id = id;
    this.parent = parent;
    this.message = message;
    // Assume that 'this' has a 'change' property too.
  }

  Git.prototype.commit = function (message) {
    // Increment last commit id and pass into new commit.
    let commit = new Commit(++this.lastCommitId, this.HEAD.commit, message);

    // Update HEAD and current branch.
    this.HEAD.commit = commit;

    return commit;
  };

  // repo.commit("Make commit work");
  // Acutal command -> $git commit -m "Make commit work"

  Git.prototype.log = function () {
    // Start from HEAD
    let commit = this.HEAD.commit,
      history = [];

    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }
    return history;
  };
  // Actual command -> $git log
  
  Git.prototype.checkout = function (branchName) {
    
  }
  
  function Branch(name, commit) {
    this.name = name;
    this.commit = commit;
  }

  window.Git = Git;
})();

console.log("Git.log() test");
let repo = new Git("test");
repo.commit("Initial commit");
repo.commit("Change 1");

let log = repo.log();
console.assert(log.length === 2); // Should have 2 commits.
console.assert(!!log[0] && log[0].id === 1); // Commit 1 should be first.
console.assert(!!log[1] && log[1].id === 0); // And then Commit 0.

console.log("Git.checkout() test");
repo = new Git("test");
repo.commit("Initial commit");

console.assert(repo.HEAD.name === "master");
repo.checkout("testing");
console.assert(repo.HEAD.name === "testing");
repo.checkout("master");
console.assert(repo.HEAD.name === "master");
repo.checkout("testing");
console.assert(repo.HEAD.name === "testing");
