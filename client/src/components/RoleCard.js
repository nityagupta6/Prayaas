export default function RoleCard({ role }) {

    return (
        <div className="flex flex-col items-center justify-center bg-[#306F5E] w-[95%] m-auto">
            <div className="">
                {/* Render the custom <i> tag from role.icon */}
                {role.icon}
            </div>
            <div className="flex flex-col w-[90%] h-[14rem] sm:h-[17rem] lg:h-[16rem]">
                <h4 className="text-base md:text-lg lg:text-xl font-bold mt-2 lg:mt-4 text-white text-center">
                    {role.title}
                </h4>
                <ul className="text-sm md:text-base mt-4 text-white font-light leading-relaxed tracking-wide list-disc pl-6" style={{ color: '#e6e6e6' }}>
                    {Array.isArray(role.content)
                        ? role.content.map((point, index) => (
                            <li key={`${role.id}-point-${index}`} style={{ marginBottom: '10px' }}>
                                {point}
                            </li>
                        ))
                        : <li style={{ marginBottom: '10px' }}>{role.content}</li>}
                </ul>

            </div>
        </div>
    );
}
