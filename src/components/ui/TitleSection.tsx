
interface TitleSectionProps {
    title: string,
}

const TitleSection: React.FC<TitleSectionProps> = ( {title} ) => {
  return (
    <div className="my-[5%]">
        <h2 className="text-3xl uppercase font-bold">{title}</h2>
    </div>
  )
}

export default TitleSection
