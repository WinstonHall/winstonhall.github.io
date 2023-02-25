import { ListItem } from '../../'

export function List({
    isOrdered = false,
    className = '',
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
    const list = mapList()
    return isOrdered ? (
        <ol className={className}>{list}</ol>
    ) : (
        <ul className={className}>{list}</ul>
    )
}
