type pagedList = {
  current: string
  pageSize: string
  total: string
  pageTotal: string
  list: ArrayBuffer
}

type ListType = {
  className: string
  oneClassName: string
  classId: string
  pagedList: pagedList
}

export default ListType
