export default function CountdownItem({ value, label }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>{value || '00'}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}