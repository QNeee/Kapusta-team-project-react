import React from 'react';
import {
  ReportExpenseListItemSvg,
  ReportBackgroundIncomeSvg,
} from './Icons.styled';

function Salary() {
  return (
    <ReportBackgroundIncomeSvg>
      <ReportExpenseListItemSvg
        id="З/П"
        className="item-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
      >
        <path id="З/П" d="M26.973 22.662c-.19-.068-.385-.138-.58-.21v-3.53a4.785 4.785 0 011.114.627 1.094 1.094 0 001.39-1.689 6.834 6.834 0 00-2.504-1.226v-.536a1.094 1.094 0 00-2.187 0v.485a4.474 4.474 0 00-.35.088c-1.257.38-2.165 1.439-2.428 2.835-.255 1.357.187 2.71 1.127 3.447.428.337.951.645 1.65.966v4.626c-.494-.07-.866-.238-1.458-.625a1.094 1.094 0 10-1.197 1.83c1.039.68 1.771.919 2.656.995v.68a1.094 1.094 0 002.187 0v-.785c1.82-.46 2.985-2.015 3.243-3.547.331-1.97-.739-3.751-2.663-4.431zm-2.767-1.218c-.109-.07-.21-.14-.302-.212-.295-.231-.429-.774-.326-1.32.034-.183.174-.727.628-1.016v2.548zm3.273 5.287a2.264 2.264 0 01-1.086 1.571v-3.52c1.187.5 1.158 1.52 1.086 1.949z"></path>
        <path id="З/П" d="M51.79 23.369l-6.946-4.588V1.094C44.844.49 44.354 0 43.75 0H17.5c-.604 0-1.094.49-1.094 1.094V5.25H12.25c-.604 0-1.094.49-1.094 1.094V18.78L4.21 23.37a1.094 1.094 0 00-.491.912v30.625c0 .604.49 1.094 1.094 1.094h18.265a1.094 1.094 0 000-2.188H7.453L23.4 37.867l3.998 2.64a1.093 1.093 0 001.206 0l3.998-2.64 15.946 15.947H32.922a1.094 1.094 0 000 2.187h18.266c.603 0 1.093-.49 1.093-1.094V24.281c0-.367-.184-.71-.49-.912zm-2.587.912l-4.36 2.879v-5.757l4.36 2.878zM18.593 2.188h24.063v26.416l-3.062 2.023V6.344c0-.604-.49-1.094-1.094-1.094H18.594V2.187zm-7.437 19.215v5.757L6.797 24.28l4.36-2.878zm-5.25 30.863V26.314l15.63 10.322-15.63 15.63zM28 38.283l-14.656-9.679V7.438h24.062V32.07L28 38.283zm22.094-11.969v25.952l-15.63-15.63 15.63-10.322z"></path>
        <path id="З/П" d="M28 53.813c-.288 0-.57.116-.773.32-.204.203-.32.486-.32.773 0 .288.116.57.32.773.203.204.485.321.773.321.288 0 .57-.117.773-.32.204-.204.32-.486.32-.774 0-.287-.116-.57-.32-.773a1.101 1.101 0 00-.773-.32z"></path>
      </ReportExpenseListItemSvg>
    </ReportBackgroundIncomeSvg>
  );
}

export default Salary;
