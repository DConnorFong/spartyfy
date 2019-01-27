class Song {
  constructor(raw, duration) {
    this.raw = raw;
    this.upVotes = [];
    this.downVotes = [];
    this.duration = duration;
  }

  upVote(user) {
    if (!upVotes.includes(user)) {
      this.upVotes.push(user);
      return true;
    }
    return false;
  }

  downVote(user) {
    if (!downVotes.includes(user)) {
      this.downVotes.push(user);
      return true;
    }
    return false;
  }
}

module.exports = Song;