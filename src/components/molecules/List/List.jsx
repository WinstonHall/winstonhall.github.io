import { ListItem } from '../../'

export function List({
    isOrdered = false,
    isWrapped = false,
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

    return isOrdered ? (
        <ol className={isWrapped ? 'wrap_list' : ''}>{mapList()}</ol>
    ) : (
        <ul className={isWrapped ? 'wrap_list' : ''}>{mapList()}</ul>
    )
}
