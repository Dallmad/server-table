let items = [
    {id: 1, date: 'Thu Oct 06 2022 12:10:37 GMT+0300 (Moscow Standard Time)', name: 'rtr', number: 24, distance: 456},
    {id: 2, date: 'Thu Oct 06 2022 12:10:15 GMT+0300 (Moscow Standard Time)', name: 'hsthr', number: 23, distance: 1},
    {id: 3, date: 'Thu Oct 06 2022 12:10:57 GMT+0300 (Moscow Standard Time)', name: 'ykyk', number: 177, distance: 467},
    {id: 4, date: 'Thu Oct 06 2022 12:09:20 GMT+0300 (Moscow Standard Time)', name: 'ag', number: 3, distance: 34},
    {id: 5, date: 'Thu Oct 06 2022 12:09:54 GMT+0300 (Moscow Standard Time)', name: 'lu', number: 356546, distance: 27},
    {id: 6, date: 'Thu Oct 06 2022 12:08:12 GMT+0300 (Moscow Standard Time)', name: 'ytti', number: 4564, distance: 478},
    {id: 7, date: 'Thu Oct 06 2022 12:08:47 GMT+0300 (Moscow Standard Time)', name: 'gnffgnf', number: 24312, distance: 895},
    {id: 8, date: 'Thu Oct 06 2022 12:07:21 GMT+0300 (Moscow Standard Time)', name: 'wex', number: 58, distance: 73},
    {id: 9, date: 'Thu Oct 06 2022 12:07:58 GMT+0300 (Moscow Standard Time)', name: 'ukyny', number: 11, distance: 672},
    {id: 10, date: 'Thu Oct 06 2022 12:06:55 GMT+0300 (Moscow Standard Time)', name: 'qeqwewq', number: 17, distance: 79},
    {id: 11, date: 'Thu Oct 06 2022 12:06:32 GMT+0300 (Moscow Standard Time)', name: 'ewrtb', number: 788, distance: 6262},
    {id: 12, date: 'Thu Oct 06 2022 12:005:12 GMT+0300 (Moscow Standard Time)', name: 'nmut', number: 73, distance: 657},
    {id: 13, date: 'Thu Oct 06 2022 12:05:47 GMT+0300 (Moscow Standard Time)', name: 'ytiti', number: 25, distance: 46856},
    {id: 14, date: 'Thu Oct 06 2022 12:04:04 GMT+0300 (Moscow Standard Time)', name: 'cuii', number: 467, distance: 25},
    {id: 15, date: 'Thu Oct 06 2022 12:04:28 GMT+0300 (Moscow Standard Time)', name: '4524', number: 235, distance: 347},
    {id: 16, date: 'Thu Oct 06 2022 12:04:59 GMT+0300 (Moscow Standard Time)', name: 'c4c4c', number: 74567, distance: 45},
    {id: 17, date: 'Thu Oct 06 2022 12:03:01 GMT+0300 (Moscow Standard Time)', name: 'x32x', number: 4643, distance: 83},
    {id: 18, date: 'Thu Oct 06 2022 12:03:27 GMT+0300 (Moscow Standard Time)', name: '4b66', number: 578, distance: 357},
    {id: 19, date: 'Thu Oct 06 2022 12:03:56 GMT+0300 (Moscow Standard Time)', name: 'retr', number: 23, distance: 88},
    {id: 20, date: 'Thu Oct 06 2022 12:02:21 GMT+0300 (Moscow Standard Time)', name: 'r78768', number: 121, distance: 445},
    {id: 21, date: 'Thu Oct 06 2022 12:02:52 GMT+0300 (Moscow Standard Time)', name: 'r787878', number: 1612, distance: 436}
]
const getItems = () => {
    return items
}
const addItem = (item) => {
    items.push(item)
}

exports.getItems = getItems
exports.addItem = addItem