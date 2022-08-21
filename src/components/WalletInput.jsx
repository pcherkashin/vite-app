import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

export default function WalletInput() {
  return (
    <div>
      <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
        Account number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="000-00-0000"
        />
      </div>
    </div>
  )
}
