import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">¿Te gustaría participar? </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Estamos en busca de personas interesadas en participar en proyectos open source de inteligencia artificial, machine learning, robótica, ciencia de datos y desarrollo de software.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-3 ">

            {/* Item */}
            {/* <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="124" height="24" viewBox="0 0 124 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.734 11.56c-1.022 0-1.76.325-2.506.657v7.506c.715.066 1.125.066 1.804.066 2.454 0 2.79-1.091 2.79-2.615v-3.585c0-1.125-.384-2.03-2.088-2.03zm-16.295-.41c-1.702 0-2.09.908-2.09 2.032v.632h4.179v-.632c0-1.124-.389-2.032-2.089-2.032zm-31.566 7.813c0 .89.432 1.351 1.386 1.351 1.023 0 1.628-.324 2.375-.656v-1.781h-2.236c-1.06 0-1.525.191-1.525 1.086zm63.711-7.403c-1.705 0-2.296.904-2.296 2.03v4.106c0 1.128.591 2.035 2.296 2.035 1.7 0 2.296-.907 2.296-2.035V13.59c0-1.125-.596-2.03-2.296-2.03zM7.517 23.568H2.505V11.783H0v-4.06h2.505v-2.44C2.505 1.97 3.92 0 7.936 0h3.346v4.062H9.19c-1.565 0-1.668.568-1.668 1.627l-.006 2.033h3.787l-.442 4.06H7.517v11.786zm17.13.03H20.47l-.18-1.026a9.802 9.802 0 01-4.733 1.193c-3.064 0-4.695-1.988-4.695-4.738 0-3.243 1.903-4.401 5.307-4.401h3.465v-.701c0-1.656-.195-2.142-2.817-2.142h-4.286l.419-4.06h4.685c5.751 0 7.013 1.764 7.013 6.235v9.64zm14.207-11.517c-2.6-.433-3.347-.528-4.597-.528-2.247 0-2.926.481-2.926 2.334v3.506c0 1.854.679 2.337 2.926 2.337 1.25 0 1.997-.096 4.597-.531v3.961c-2.277.496-3.76.626-5.015.626-5.381 0-7.52-2.749-7.52-6.72v-2.845c0-3.974 2.139-6.728 7.52-6.728 1.254 0 2.738.13 5.015.629v3.959zm15.686 4.985h-9.192v.327c0 1.854.68 2.337 2.925 2.337 2.02 0 3.252-.096 5.847-.531v3.961c-2.503.496-3.807.626-6.262.626-5.382 0-7.522-2.749-7.522-6.72v-3.253c0-3.474 1.588-6.32 7.103-6.32s7.1 2.813 7.1 6.32v3.253zm16.294.075c0 3.838-1.13 6.638-7.971 6.638-2.47 0-3.92-.21-6.647-.618V1.22l5.01-.812v7.675c1.084-.391 2.485-.59 3.76-.59 5.012 0 5.847 2.183 5.847 5.69v3.958zm16.062.084c0 3.31-1.407 6.522-7.295 6.522-5.891 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.888 0 7.295 3.212 7.295 6.525v3.197zm16.052 0c0 3.31-1.41 6.522-7.296 6.522-5.89 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.887 0 7.296 3.212 7.296 6.525v3.197zm16.473 6.343h-5.432l-4.593-7.449v7.45h-5.013V1.218l5.013-.812v14.388l4.593-7.073h5.432l-5.015 7.718 5.015 8.128zM95.635 11.56c-1.703 0-2.293.904-2.293 2.03v4.106c0 1.128.59 2.035 2.293 2.035 1.7 0 2.301-.907 2.301-2.035V13.59c0-1.125-.601-2.03-2.301-2.03zm26.646 9.228c.844 0 1.517.669 1.517 1.504 0 .848-.673 1.509-1.523 1.509a1.511 1.511 0 01-1.531-1.51c0-.834.685-1.503 1.531-1.503h.006zm-.006.234c-.68 0-1.236.569-1.236 1.27 0 .714.557 1.275 1.242 1.275.687.007 1.235-.561 1.235-1.268 0-.708-.548-1.277-1.235-1.277h-.006zm-.288 2.145h-.275v-1.678c.144-.02.282-.039.488-.039.261 0 .432.054.537.127.101.074.156.187.156.346 0 .222-.15.355-.335.409v.013c.15.027.253.16.288.406.04.261.082.36.109.415h-.289c-.04-.054-.082-.207-.116-.428-.04-.214-.152-.294-.372-.294h-.19v.723h-.001zm0-.929h.2c.225 0 .417-.08.417-.288 0-.147-.109-.293-.418-.293-.09 0-.152.006-.2.013v.568z" />
              </svg>
            </div> */}

            {/* Item */}

            {/* <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="83" height="30" viewBox="0 0 83 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.186 0c.2.093.326.285.486.437.26.225.452.523.705.755.312.298.512.675.771 1.013.452.682.851 1.41 1.057 2.205.213.542.246 1.132.233 1.714.013.53-.133 1.053-.372 1.53-.413.721-1.157 1.205-1.935 1.463-.971.232-2.042.272-2.98-.139-.338-.185-.724-.311-.997-.603-.631-.516-.997-1.357-.877-2.171.186-1.45 1.057-2.695 1.988-3.767.086.158.013.344.073.51.08.35.206.721.472.973.326-.298.672-.596.95-.94.254-.371.46-.782.546-1.219.02-.556.073-1.139-.14-1.668l.02-.093zM.005 6.614c1.556.014 3.118-.013 4.674.014 0 1.542.014 3.085-.006 4.628 1.104.02 2.207.006 3.318.006.013.12.02.239.02.358-.014 1.271.006 2.536-.014 3.807-1.11.013-2.214 0-3.324.006.02 2.285-.007 4.562.013 6.846.04.2.067.398.06.603-.02.185.093.338.133.51.086.397.306.755.558 1.066.373.37.851.629 1.363.741.466.073.931.113 1.404.08.026.08.04.159.04.245a319.227 319.227 0 000 3.568c0 .166-.034.331-.06.49-.672 0-1.344.047-2.015 0-.4-.086-.825-.046-1.21-.218-1.07-.252-2.095-.781-2.86-1.583C.977 26.702.372 25.18.126 23.67c-.067-.166-.027-.358-.054-.536-.093-.365-.053-.749-.066-1.12a5974.61 5974.61 0 010-15.4zm22.714 4.29c.279-.072.578-.02.857-.079.586-.073 1.164.02 1.743.04.405-.007.797.113 1.196.192 1.483.358 2.886 1.145 3.904 2.297.18.298.452.517.624.821.433.682.719 1.444.965 2.212.153.563.232 1.145.306 1.721.033 1.278.013 2.563.02 3.84-.007 2.55.006 5.099-.007 7.648-1.556-.02-3.105-.007-4.655-.014a.365.365 0 01-.06-.046c-.006-3.569 0-7.137 0-10.7.007-.436-.073-.86-.166-1.277a4.106 4.106 0 00-.671-1.172c-.173-.205-.412-.338-.605-.517-.3-.198-.652-.29-.991-.384-.18-.013-.36 0-.525-.06-.712-.046-1.437.014-2.102.286-.485.231-.937.549-1.256.993-.526.622-.698 1.47-.685 2.264 0 3.536.007 7.078 0 10.613-1.57.014-3.139-.006-4.708.014-.026-3.41 0-6.827-.013-10.236.007-.437-.007-.874.027-1.311.086-.219.026-.457.093-.67.12-.807.425-1.575.764-2.31.333-.642.732-1.258 1.25-1.768.406-.41.825-.84 1.337-1.125.99-.689 2.16-1.106 3.358-1.271zm55.72-.039c.579-.013 1.15-.126 1.73-.033.312.04.63.033.943.046.06.576.014 1.159.027 1.735v2.317c0 .146.02.298-.04.437-.153-.112-.359-.073-.532-.119-.705-.06-1.43-.026-2.094.238a3.333 3.333 0 00-1.869 1.596c-.113.14-.113.338-.24.47-.205.742-.219 1.516-.205 2.278-.007 3.257.02 6.508-.014 9.766-1.55-.02-3.105 0-4.66-.014-.014-.013-.034-.04-.047-.053V18.903c-.02-.444.08-.874.073-1.311.106-.212.08-.457.146-.675.332-1.676 1.217-3.258 2.56-4.337.26-.291.632-.43.938-.662.99-.603 2.14-.894 3.284-1.053zm-68.919.39c1.57.027 3.138-.006 4.708.014 0 6.058-.007 12.11 0 18.161 0 .06 0 .179-.093.159H9.533c-.04-1-.006-2.006-.02-3.006.007-5.105 0-10.216.007-15.327zm49.238 12.29c.399-.153.784-.352 1.19-.49.585-.226 1.157-.497 1.742-.722 1.21-.557 2.46-1.02 3.684-1.543.292-.16.625-.232.91-.404.326-.126.652-.238.971-.384.28-.166.599-.232.885-.377.379-.153.744-.325 1.13-.464.392-.218.831-.324 1.223-.536.107-.073.28-.053.346-.179-.113-.159-.053-.358-.113-.53-.086-.31-.173-.615-.246-.92-.299-.92-.731-1.8-1.316-2.569-.712-1.026-1.69-1.854-2.773-2.463-.712-.43-1.51-.675-2.307-.887-.492-.06-.965-.232-1.463-.225-.452-.06-.918-.086-1.363-.007-.792.013-1.55.205-2.3.424-1.31.457-2.554 1.152-3.558 2.112-.3.278-.546.603-.831.887-.446.57-.852 1.172-1.157 1.821-.433.973-.845 1.993-.891 3.072-.147.517-.1 1.06-.107 1.59-.013.337.04.668.107.992-.02.344.113.662.16.993.112.702.425 1.351.71 2 .785 1.602 2.022 2.993 3.571 3.9 1.018.622 2.148 1.066 3.332 1.231.964.152 1.954.179 2.925.053.333.027.652-.12.984-.139 1.417-.331 2.806-.927 3.877-1.927.319-.251.618-.55.87-.867.426-.43.732-.953 1.038-1.47.293-.55.532-1.132.705-1.735-.093-.04-.2-.026-.292-.026-1.556.007-3.106-.007-4.662 0-.146 0-.146.199-.239.278-.266.384-.605.708-.964 1.013-.519.37-1.13.57-1.736.748-.16.02-.312.013-.458.073-.373.027-.752.013-1.13.007-.42-.08-.839-.172-1.244-.305-.625-.318-1.237-.682-1.709-1.198-.12-.146-.312-.258-.352-.45.106-.047.206-.12.325-.14.193-.033.34-.185.526-.238zm-1.915-3.351c-.093-.232-.007-.503-.02-.748.106-.338.14-.695.266-1.033.319-.748.711-1.483 1.283-2.073.266-.218.492-.483.798-.648.226-.12.445-.252.678-.358.432-.126.851-.324 1.303-.324.413-.1.838-.047 1.257-.04 1.097.152 2.201.622 2.912 1.49.074.172-.172.185-.272.251-.432.239-.918.358-1.35.603-.193.033-.36.152-.545.212-1.377.596-2.78 1.119-4.143 1.741-.731.285-1.456.59-2.167.927zm-4.954-17.03c-1.456-.012-2.912 0-4.369-.006-.106.013-.232-.033-.319.047.014 3.111 0 6.23.007 9.342-.007.112.02.225-.027.33-.133-.02-.2-.145-.299-.218-.671-.576-1.423-1.066-2.26-1.35-.566-.219-1.158-.331-1.756-.437-.678-.014-1.363-.034-2.048.006-.073.02-.14.04-.213.047-1.522.211-2.945.92-4.116 1.893-.651.61-1.303 1.245-1.762 2.013-.538.761-.884 1.635-1.216 2.496-.153.543-.306 1.08-.373 1.635-.126.854-.073 1.728-.06 2.59.034.224.107.436.113.661a9.18 9.18 0 00.625 2.126c.246.655.645 1.251 1.011 1.847.26.33.512.675.824.966.466.457.925.954 1.51 1.272.691.523 1.51.834 2.307 1.139.293.052.565.218.864.225.253.02.486.139.739.125.133-.013.252.08.392.067.645.02 1.296.02 1.941 0 .107 0 .213-.047.326-.053.446.006.858-.166 1.29-.226.565-.205 1.17-.337 1.696-.642.778-.357 1.482-.86 2.114-1.43a8.187 8.187 0 001.922-2.49c.206-.416.439-.82.572-1.27.252-.623.365-1.285.452-1.94.146-.577.1-1.179.113-1.775V3.164zm-4.728 17.93c-.04.702-.305 1.37-.618 2-.525.986-1.41 1.741-2.414 2.218-.153.08-.352.073-.458.218-.187 0-.373.007-.552.073-.572.014-1.164.066-1.723-.092-.239-.113-.505-.16-.744-.285-.3-.166-.639-.278-.885-.53-.465-.324-.824-.768-1.15-1.225-.26-.443-.519-.9-.638-1.403-.133-.265-.12-.563-.193-.841-.02-.709-.06-1.437.106-2.126.074-.218.12-.45.2-.668.193-.351.312-.742.565-1.06.133-.278.366-.483.552-.721.499-.57 1.184-.934 1.875-1.219.26-.059.512-.191.785-.191.552-.14 1.123-.027 1.669.072.718.259 1.43.616 1.988 1.146.206.192.359.43.565.622a5.625 5.625 0 011.07 4.012zM78.4 27.265h1.743c.006.132.006.265 0 .397-.2.027-.4-.006-.592.02-.027.596 0 1.185-.013 1.781a4.773 4.773 0 00-.532-.006c-.02-.47-.014-.947-.007-1.417 0-.126.027-.272-.087-.358-.172-.026-.345.007-.518-.02a2.625 2.625 0 01.006-.397zm2.062.007c.246-.007.492-.02.738.013-.013.192.146.324.193.503.066.225.166.437.232.662.054.1.147.186.113.311.133-.516.34-1.006.546-1.49a8.47 8.47 0 01.711 0c.013.709 0 1.43 0 2.14a2.97 2.97 0 01-.485 0c.006-.497 0-.994.013-1.484-.06.053-.12.1-.166.166-.087.45-.32.86-.432 1.31-.133.02-.26.02-.393.007-.04-.251-.22-.457-.22-.715-.179-.218-.185-.53-.325-.774-.093.178-.02.39-.04.582-.026.311.033.63-.026.94-.16 0-.34.053-.466-.06.02-.701 0-1.403.007-2.111z" />
              </svg>
            </div> */}

       

         

          </div>

          

          {/* Testimonials */}
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white blue-tabscoob hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://forms.office.com/r/Q4xtHWaJhW">Quiero participar</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://github.com/tabscoob">Proyectos</a>
                </div>
              </div>
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              {/* <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={require('../images/testimonial.jpg').default} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;