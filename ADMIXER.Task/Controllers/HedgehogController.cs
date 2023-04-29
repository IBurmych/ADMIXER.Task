using ADMIXER.Task.Models;
using Microsoft.AspNetCore.Mvc;

namespace ADMIXER.Task.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HedgehogController : ControllerBase
    {
        [HttpPost(Name = "GetMinMeetsCount")]
        public IActionResult GetMinMeetsCount([FromBody] HedgehogInitialModel model)
        {
            if (model.FinalColor > 2 || model.FinalColor < 0 || model.StartHedgehogsColors.Length != 3)
                return BadRequest(-1);

            int countFinalColor = model.StartHedgehogsColors[model.FinalColor];
            if (model.StartHedgehogsColors.Count(x => x == 0) == 2)
            {
                if (countFinalColor != 0)
                    return Ok(0);

                return Ok(-1);
            }

            var countsWithoutFinalColor = model.StartHedgehogsColors.Where((_, index) => index != model.FinalColor).ToArray();
            if (countsWithoutFinalColor[0] == countsWithoutFinalColor[1]) 
                return Ok(countsWithoutFinalColor[0]);

            if(Math.Abs(countsWithoutFinalColor[0] - countsWithoutFinalColor[1]) % 3 == 0)
                return Ok(countsWithoutFinalColor.Max());


            return Ok(-1);
        }
    }
}
