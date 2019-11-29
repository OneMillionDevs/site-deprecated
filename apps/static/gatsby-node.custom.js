const markdownSelectTemplate = template => ({
  content: path.resolve(__dirname, "./src/components/templates/Content/index.jsx"),
}[template || 'content'])