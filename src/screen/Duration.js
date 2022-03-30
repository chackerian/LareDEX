export default function Duration() {

  return (
          <div className="flex flex-col items-center py-16 bg-gray-100">
          <ul id="filter1" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input type="radio" name="filter1" id="filter1-0" className="sr-only" checked />
              <label for="filter1-0" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                24H
              </label>
              <div aria-hidden="true" className="filter-active"></div>
            </li>
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input type="radio" name="filter1" id="filter1-1" className="sr-only" />
              <label for="filter1-1" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                1W
              </label>
            </li>
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input type="radio" name="filter1" id="filter1-2" className="sr-only" />
              <label for="filter1-2" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                1M
              </label>
            </li>
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input type="radio" name="filter1" id="filter1-3" className="sr-only" />
              <label for="filter1-3" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                1Y
              </label>
            </li>
          </ul>
        </div>
    )
}