type TBanner = {
  title: string;
}

const NavBanner = (props: TBanner) => {
  const { title } = props;
  
  return (
    <div className="relative w-screen min-h-[250px] mb-8">
      <div className="absolute inset-0 bg-[url('/money.png')] bg-cover bg-no-repeat"/>
      <div className="absolute inset-0 bg-[#FD983F] opacity-80" />
      <div className="relative flex flex-col gap-0 justify-center min-h-[250px]">
        <div className="w-screen flex justify-center">
          <p className='text-3xl text-white'><b>{title}</b></p>
        </div>
      </div>
    </div>
  )
}

export default NavBanner