export const GenreMobileButton = ({field, onClick}) => {
    return (
        <button onClick={onClick} className="w-full px-1 line-clamp-1 py-2 text-left active:bg-gray-700 rounded">
              {field}
            </button>
    )
}