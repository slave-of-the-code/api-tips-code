const gitController = {};

let data = [
  { id: Date.now(), code: "git log", description: "get log of all commit" },
  {
    id: Date.now(),
    code: "git status",
    description: "show a brief status",
  },
  { id: Date.now(), code: "git commit", description: "up a commit" },
];

gitController.getAll = (req, res) => {
  res.json(data);
};

gitController.addTips = (req, res) => {
  const body = req.body;
  //   res.send(JSON.stringify(req.body, null, 2));
  data = [
    ...data,
    {
      id: Date.now(),
      code: body.code,
      description: body.description,
    },
  ];
  res.send("New tips was added");
};

module.exports = gitController;
