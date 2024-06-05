exports.paginateResults = (results, cursor, limit) => {
    const startIndex = cursor ? results.findIndex(result => result.id === cursor) + 1 : 0;
    return results.slice(startIndex, startIndex + limit);
  };
  