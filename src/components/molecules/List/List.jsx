import { ListItem } from '../../'

export function List({
    isOrdered = false,
    isWrapped = false,
    rows = 1,
    listItems = [
        'Missing List Items Array',
        'Missing List Items Array',
        'Missing List Items Array',
        'Missing List Items Array',
    ],
}) {
    function mapList() {
        return listItems.map(function (listItem, index) {
            return <ListItem key={index} listItem={listItem} />
        })
    }
    // TODO: Make a useCallback?
    function getRowClassName(rows) {
        switch (rows) {
            case 1:
                return 'row_1'
            case 2:
                return 'row_2'
            case 3:
                return 'row_3'
            default:
                return ''
        }
    }
    // TODO: make wrap, and the function above's returned value, a useMemo?
    const list = mapList()
    const wrap = isWrapped ? 'wrap_list' : ''
    const classString = `${wrap} ${getRowClassName(rows)}`

    return isOrdered ? (
        <ol className={classString}>{list}</ol>
    ) : (
        <ul className={classString}>{list}</ul>
    )
}
