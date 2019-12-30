using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.Models
{
  [Table("Features")]
  public class Feature
  {
    public int Id { set; get; }

    [Required]
    [StringLength(255)]
    public string Name { set; get; }
  }
}