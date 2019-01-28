document.body.innerHTML=`
<br/><br/>
<center>
  <h1>
    This website does not support Chrome.<br/>
    Please use Internet Explorer instead.
  </h1>
</center>
`;
document.location.href="ie:"+document.location.href;