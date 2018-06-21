const XLSX = Npm.require('xlsx')

Excel = function (fileType) {
  if (fileType !== 'xlsx' && fileType !== 'xls') {
    throw new Meteor.Error(400, 'File must be of type xlsx or xls')
  }

  this.fileType = fileType
  this.utils = new ExcelUtils(this.fileType)
}

Excel.prototype.readFile = function (fileName, readOptions) {
  if (this.fileType === 'xlsx') {
    return XLSX.readFile(fileName, readOptions)
  } else if (this.fileType === 'xls') {
    return XLSX.readFile(fileName, readOptions)
  }
}

Excel.prototype.read = function (file, readOptions) {
  if (this.fileType === 'xlsx') {
    return XLSX.read(file, readOptions)
  } else if (this.fileType === 'xls') {
    return XLSX.read(file, readOptions)
  }
}

Excel.prototype.createWorkbook = function () {
  return new Workbook(this.fileType)
}

Excel.prototype.createWorksheet = function () {
  return new Worksheet(this.fileType)
}
