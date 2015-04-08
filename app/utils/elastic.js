export function search(client, query, options) {
  var success = options.success;
  var fail = options.fail;

  client.search({
    query
  }).then(function (body) {
    success(body);
  }, function (error) {
    fail(error);
  });
}
