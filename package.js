Package.describe({
  name: 'asoares:excel',
  version: '0.0.1',
  summary: 'Parse excel worksheets for your meteor app.',
  git: 'https://github.com/soaresa/meteor-excel',
  documentation: 'README.md'
})

Npm.depends({
  xlsx: '0.13.0'
})

Package.onUse(function (api) {
  api.versionsFrom('1.5.2.2')

  api.addFiles('lib/utils.js', 'server')
  api.addFiles('lib/workbook.js', 'server')
  api.addFiles('lib/worksheet.js', 'server')
  api.addFiles('excel.js', 'server')

  api.export('Excel')
})

Package.onTest(function (api) {
  api.use('tinytest')
  api.use('asoares:excel')
  api.addFiles('excel-tests.js')
})
