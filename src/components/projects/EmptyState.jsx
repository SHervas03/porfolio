export const EmptyState = ({ icon: Icon, title, subtitle, additionalText }) => {
  return (
    <div className="text-center py-16 rounded-xl">
      <Icon className="mx-auto text-5xl text-gray-400 mb-4" />
      <h3 className="text-xl font-medium text-gray-500">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
      {additionalText && <p className="text-gray-400 mt-2">{additionalText}</p>}
    </div>
  );
};