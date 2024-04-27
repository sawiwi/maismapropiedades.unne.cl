import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Button/Button';
import { navigationData } from '../../data/navigation';
import { getCurrentYear } from '../../utils';
import Logo from '../Logo/Logo';
import { footerData } from '../../constants/consts/realtor';
import LogoFooter from '../../assets/img/logo/logo.jpg'

const Footer = () => (
  <footer className="bg-gray-100 pt-10 pb-20 xl:px-32">
    <div className='grid grid-cols-1 lg:grid-cols-4 mx-4 lg:mx-0'>
      <div className='col-span-1'>
        <div className='my-11 mx-14 2xl:my-1 2xl:mt-6 2xl:mx-20'>
          {/* <h2 className='text-7xl font-bold text-primary'>LOGO</h2> */}
          <a href='/inicio' smooth="true" >
            <img src={LogoFooter} className='w-36 h-30 xl:w-36 xl:h-30'/>
          </a>
        </div>
      </div>
      <div className='col-span-3'>
        <div className="flex flex-wrap justify-center">
          <div className="pl-2 w-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12">
            <div className="w-5/6">
              <h2 className="w-86 py-1 text-2xl text-start my-2 text-primary uppercase"
              >
                Sobre nosotros
              </h2>
              <div className="h-56">
                {/* <p className="text-md text-gray-800 mt-5">
                  <span className="font-bold text-gray-900">Dirección:</span>{' '}
                  Asturias 171, Of. 101, Las Condes, Santiago
                </p> */}
                <p className="text-md text-gray-800 mt-1">
                  <span className="font-bold text-gray-900">Teléfono:</span> +56{' '}
                  {footerData.phone}
                </p>
                <p className="text-md text-gray-800 mt-1">
                  <span className="font-bold text-gray-900">WhatsApp:</span> +56{' '}
                  {footerData.wsp}
                </p>
                <p className="text-md text-gray-800 mt-1">
                  <span className="font-bold text-gray-900">Correo:</span>{' '}
                  {footerData.email}
                </p>
              </div>
            </div>
          </div>
          <div className="pl-2 w-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12">
            <div className="w-5/6">
              <h2
                className="w-86 py-1 text-2xl text-start my-2 text-primary uppercase"
              >
                SÍGUENOS EN:
              </h2>
              <div className="h-32">
                <div className="d-flex flex-col text-md text-gray-800 mt-5">
                  <div className="flex justify-start items-center my-3">
                    <a
                      href="https://www.facebook.com/"
                      target='_blank'
                      className="text-dark bg-secondary-ligth text-secondary-300 hover:scale-110 hover:border-secondary duration-300 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-secondary sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        className="fill-current"
                      >
                        <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target='_blank'
                      className="text-dark bg-secondary-ligth text-secondary-300 hover:scale-110 hover:border-secondary duration-300 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-secondary sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      {/* <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        className="fill-current"
                      >
                        <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                      </svg> */}
                      <svg width="20" height="15" className="fill-current" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/" preserveAspectRatio="xMidYMid">
                          <g>
                              <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"></path>
                          </g>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/"
                      target='_blank'
                      className="text-dark bg-secondary-ligth text-secondary-300 hover:scale-110 hover:border-secondary duration-300 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-secondary sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" className="fill-current" viewBox="0 5 1036 990">
                        <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
                      </svg>
                    </a>
                    <a
                      href="https://unne.cl/"
                      target='_blank'
                      className="text-dark bg-secondary-ligth text-secondary-300 hover:scale-110 hover:border-secondary-300 duration-300 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-secondary sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 1280 1280"
                          className="fill-current"
                        
                        >
                          <g>
                            <path d="M609.5.6C514.3 6.2 433 27.7 352 68.5 175.6 157.5 50.2 322.6 12.1 516 3.6 559 .6 591.7.6 640c0 40.2 1.1 57 6 91 22.3 156.2 101.2 297.7 222.8 399.7 95 79.7 211.7 130.2 334.6 144.7 28.1 3.3 41.6 4.1 76 4.1 35.9 0 48.5-.7 79.5-4.6 211.9-26.1 397.5-157.6 493.3-349.4 30.6-61.3 50.8-126.1 60.6-194.5 4.9-33.9 6-50.8 6-90.5 0-39.8-1.2-58.3-6-91.5C1233.3 268.2 1011.6 46.5 731 6.5 701.2 2.3 682.2.9 648 .6c-17.9-.2-35.2-.2-38.5 0zm72.3 71.1c32.2 33.9 46.6 50.1 65.9 73.9 42.7 53 80.2 110.8 107.5 166.4 8.2 16.6 20.8 44.3 20.3 44.8-.9.9-25.9 8.1-44.5 12.7-29.3 7.4-51.3 11.7-84 16.5-15 2.2-35.8 4.2-67.7 6.5l-8.3.5V228c0-130.4.3-165 1.2-165 .7 0 5 3.9 9.6 8.7zM609 230v163.1l-7.2-.6c-4-.3-13.8-1-21.8-1.5-30-2.2-62.4-6.7-94.5-13.1-26.4-5.3-74.5-17.9-74.5-19.5 0-.3 3.4-8.2 7.6-17.7 35.6-80.2 85-156.8 147.3-228.4C580.4 95.7 607.1 67 608.2 67c.4 0 .8 73.4.8 163zM513.4 77.2c-.5.7-4.2 5.3-8.4 10.3-59.4 70.2-111.4 153.3-145.5 232.6-4 9.4-7.6 17.3-7.9 17.6-1.4 1.4-58.5-24.9-82.8-38.2C240.9 284.2 205 262 205 260s49.6-50.8 62.5-61.4c64-53 130.5-89 206.9-112.1 6.9-2 37.8-10.3 39.4-10.5.2 0 0 .6-.4 1.2zM786 81.1c90.7 24.1 169.9 66.8 239.4 128.8 13.3 12 46.8 45.8 48.7 49.2.8 1.6-.5 2.8-10.5 9.3-24.6 16-55.9 33.6-83.1 46.7-18.3 8.8-43.2 19.9-44.9 19.9-.6 0-4-6.6-7.6-14.8-32.9-75.2-80-150.9-137.4-220.6-7.2-8.7-14.1-17.2-15.4-18.7-1.3-1.6-2-2.9-1.5-2.9.4 0 6 1.4 12.3 3.1zM206.7 335.9c33.3 20 66 36.6 102.4 52.1 10.7 4.6 19.8 8.6 20.2 9 .4.4-.3 4.2-1.7 8.6-10.3 33.2-20.1 74.1-25.5 107.4-4.3 26-9.1 70.5-9.1 83.8 0 3.3-.3 7.4-.6 9.1l-.7 3.1-114.1-.2-114.1-.3.3-6c2.3-48.2 13.8-104.5 31.9-156 15.4-43.7 42.2-96.7 65.9-130.2l4.4-6.2 13 8.4c7.1 4.7 19.6 12.5 27.7 17.4zm915.6-13.6c32.9 50.1 57 102.7 73.7 160.9 9.3 32.6 17.3 77.2 19.5 108.8.3 4.7.8 10.4 1.1 12.7l.5 4.3H996.3l-.7-12.8c-3.3-58.8-15-123.9-32.7-181.7-2.8-9.4-5.2-17.8-5.3-18.8-.1-1.4 4-3.5 18.3-9.7 38.9-16.9 79.9-38.7 116.2-61.8 9.6-6.1 18.3-11.7 19.4-12.5 1.1-.9 2.3-1.3 2.7-1.1.5.3 4.1 5.5 8.1 11.7zM900.1 422.5c16.4 51.7 26.5 101.5 31.3 154 .8 8.8 1.6 19.6 1.8 24l.3 8-131.2.3-131.3.2V455.4l19.8-1.2c63.5-3.8 134.7-16.5 191.7-34.1 7.2-2.2 13.6-3.9 14.4-3.8.7.1 2.2 2.9 3.2 6.2zm-494.9-.1c59.1 17.2 122.5 28.1 184.1 31.8l19.7 1.2V609H355v-4.4c0-7.3 2.9-40 5.1-56.6 4.1-31.3 10.9-65.6 19-95.6 4.7-17.6 9.8-34.4 10.4-34.4.2 0 7.3 2 15.7 4.4zM292.4 673.2c.3 1.3.6 5 .6 8.3 0 8.4 2.6 36.9 5 56 6.2 48 18 100.3 33 145.8 2.7 8.3 4.6 15.5 4.2 15.8-.4.4-6.3 3-13.2 5.7-41.1 16.4-87.7 40.3-130.3 67-9.3 5.7-17.2 10.1-17.6 9.6-2.2-2.4-15.7-22.2-21.9-32.1-40-63.3-66.8-131.7-80.1-204.3-3.3-17.6-6.6-43-7.6-57-.3-4.7-.8-10.4-1.1-12.8l-.5-4.2h228.9l.6 2.2zM609 756.9v85.9l-9.7.6c-60.2 3.9-99.5 9.4-150.6 21.1-14.1 3.3-51.4 13.2-52.8 14.1-.7.4-8.4-22.8-13.8-41.6-14.1-49.4-23.5-103.7-26.7-155.3l-.7-10.7H609v85.9zm324.5-78.7c-2.2 28.9-2.9 36.5-5.1 53.8-4.4 33.8-11.5 68.7-20.5 101-5.2 18.2-14.8 48-15.5 48-.2 0-5.5-1.5-11.7-3.4-35.4-10.7-79.2-20.4-117.7-26-28-4.1-45.5-5.8-82.2-8.2l-9.8-.6V671h263.1l-.6 7.2zm283.1-3.5c-.3 2.1-.8 7.8-1.1 12.8-5.4 79-32.4 166.4-73.7 238.5-10.3 17.8-31.3 50.3-35.9 55.4-.4.5-8.3-3.8-17.6-9.6-41.1-25.7-91.6-51.8-127.5-65.9-4.9-1.9-8.8-3.9-8.8-4.6 0-.7.9-3.5 2-6.4 3.5-8.9 15-47.7 19.6-66.4 11.6-46.9 18.8-93 21.6-138.3l1.2-19.2h220.8l-.6 3.7zM609 1059.2l-.1 153.3-11.1-11.5c-70.1-72.7-131.3-160.5-170.8-244.9-4.4-9.6-7.9-17.9-7.7-18.5.9-2.1 45-13.2 75.7-19 36-6.8 78.8-11.8 105.8-12.4l8.2-.2v153.2zm105.5-150.6c48.1 4.7 100.5 14.6 142 27 5 1.4 9.8 2.9 10.8 3.1.9.3 1.7 1 1.7 1.7 0 2.3-27.3 55.9-37.8 74.1-31.8 55.4-68.1 105.5-114 157.3-20.6 23.3-42.1 45.2-44.3 45.2-1.9 0-1.9-3.8-1.9-155.6V905.7l14.3.7c7.8.4 21 1.4 29.2 2.2zm-339 83.9c33.6 69.3 75.1 133.1 127.5 196 7.1 8.5 12.7 15.5 12.4 15.5-1.6 0-23.7-5.6-35.2-8.9-95.8-27.8-180-77.9-251.6-150l-13.9-13.9 8.4-5.5c32.7-21.2 86-48.5 126.9-65l8.5-3.4 2.4 5.1c1.4 2.8 7.9 16.3 14.6 30.1zm571.2-24.8c31.5 13.4 82.8 40.3 110.2 58l8.4 5.5-14.4 14.5c-63.6 64-138.4 111.2-222.3 140.2-19.7 6.8-53.6 16.6-53.6 15.4 0-.2 5.3-6.8 11.8-14.6 53.7-64.3 99.7-135.9 132.2-205.6 5.2-11.1 10-20.1 10.6-20.1.7 0 8.4 3 17.1 6.7z" />
                          </g>
                        </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-2 w-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12">
            <div className="w-5/6">
              <h2
                
                className="w-86 py-1 text-2xl text-start my-2 text-primary uppercase"
              >
                Menú
              </h2>
              <div className="">
                <div className='mt-3'>
                  {navigationData.map((item)=>(
                    <div key={item.id}>
                      {item.name.toLowerCase() != 'mi cuenta' ? (<Link 
                      className='text-md text-gray-800 mt-1 cursor-pointer hover:text-primary gap-4'
                      to={item.toScroll}
                      spy={true} 
                      smooth={true} 
                      offset={item.offset} 
                      duration={item.duration} 
                      >
                        {item.name}
                      </Link>) : (
                        <a href={item.toScroll} className={'text-md text-gray-800 mt-1 cursor-pointer hover:text-primary'} target='_blank'>{item.name}</a>
                      )}
                      
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className='w-full flex flex-wrap justify-between'>
              <span className="block text-sm text-neutral-700 sm:text-center w-full p-3 rounded ">
                © {getCurrentYear()} {" "}
                <a href="/" className="ml-1 hover:underline">
                  AccionPanal
                </a>
                . Todos los derechos reservados.
                <span className='flex justify-end w-full items-center'>
                  <Logo/>
                </span> 
                  {/* <Link to="https://unne.cl/" target='_blank' className='flex justify-center items-center'>
                 
                    {UnneLogo && (
                      <a href='https://unne.cl/' className='cursor-pointer font-semibold uppercase text-xl text-neutral-600'>Red unne</a>
                    )}
                  </Link> */}
              </span> 
       
                      
    </div>
  </footer>
);

export default Footer;
