function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 mb-8">

      <div className="bg-gray-100 px-5 py-3 border-b">

        <h2 className="font-semibold uppercase tracking-wide text-gray-700">
          {title}
        </h2>

      </div>

      <div className="p-6">

        {children}

      </div>

    </div>
  );
}

export default SectionCard;
