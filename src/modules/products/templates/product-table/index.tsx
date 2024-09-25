import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function ProductTable() {
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Size</TableColumn>
        <TableColumn>XS</TableColumn>
        <TableColumn>S</TableColumn>
        <TableColumn>M</TableColumn>
        <TableColumn>L</TableColumn>
        <TableColumn>XL</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Length</TableCell>
          <TableCell>APS</TableCell>
          <TableCell>APS</TableCell>
          <TableCell>APS</TableCell>
          <TableCell>APS</TableCell>
          <TableCell>APS</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Chest</TableCell>
          <TableCell>32</TableCell>
          <TableCell>34</TableCell>
          <TableCell>36/38</TableCell>
          <TableCell>40/42</TableCell>
          <TableCell>44/46</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Waist</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Hips</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Daman</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Sleeves</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>Shoulder</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell>Sl Opening</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell>UK Size</TableCell>
          <TableCell>26</TableCell>
          <TableCell>28</TableCell>
          <TableCell>30-34</TableCell>
          <TableCell>38-42</TableCell>
          <TableCell>44</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}