export default function LeftSideMenu() {
    return(
        <div className="flex flex-col h-full bg-gray-200 p-4">
        <div className="text-xl font-bold mb-4">Menu</div>
        <ul className="space-y-2">
          <li className="hover:text-blue-500 cursor-pointer">Item 1</li>
          <li className="hover:text-blue-500 cursor-pointer">Item 2</li>
          <li className="hover:text-blue-500 cursor-pointer">Item 3</li>
        </ul>
      </div>
    )
}