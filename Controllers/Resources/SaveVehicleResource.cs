using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using Vega.Models;

namespace Vega.Controllers.Resources
{
  public class SaveVehicleResource
  {
    public int Id { set; get; }

    public int ModelId { get; set; }

    public bool IsRegistered { get; set; }

    [Required]
    public ContactResource Contact { get; set; }

    public ICollection<int> Features { get; set; }

    public SaveVehicleResource()
    {
      Features = new Collection<int>();
    }
  }
}