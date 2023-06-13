const sequenceSum = (begin, end) => {
    // BEGIN
      return (begin > end) ? NaN : (begin == end) ? begin : sequenceSum(begin + 1, end) + begin
    // END
}
export default sequenceSum;
  