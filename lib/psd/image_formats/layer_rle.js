// Generated by CoffeeScript 1.11.1
(function() {
  module.exports = {
    parseByteCounts: function() {
      var i, j, ref, results;
      results = [];
      for (i = j = 0, ref = this.height(); 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(this.file.readShort());
      }
      return results;
    },
    parseChannelData: function() {
      this.lineIndex = 0;
      return this.decodeRLEChannel();
    }
  };

}).call(this);
